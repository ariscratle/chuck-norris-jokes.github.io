import React, { Component, Fragment } from 'react'
import ChuckNorrisAvatar from '../../components/ChuckNorrisAvatar'
import Phrases from '../../components/Phrases'
import { getPhrase } from '../../actions/PhrasesAction'
import Loading from '../../components/Loading'
import Button from '../../components/Button'

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            phrase: '',
            loading: true
        }
    }

    componentDidMount() {
        this.newJoke()
    }

    newJoke = () => {
        this.setState({
            loading: true
        })

        setTimeout(() => {
            const joke = getPhrase()

            joke.then((response) => {
                this.setState({
                    phrase: response,
                    loading: false
                })
            })
        }, 1000)
    }

    render() {
        return (
            <Fragment>
                <Loading loading={ this.state.loading === true ? 'active' : '' } />

                <div className="page-home">
                    <div className="container">
                        <h1 className="page-home__title main-header">Chuck Norris Jokes</h1>

                        <ChuckNorrisAvatar />

                        <Phrases phrase={ this.state.phrase } />

                        <Button newJoke={ () => { this.newJoke() } } />
                    </div>
                </div>
            </Fragment>
        )
    }
}