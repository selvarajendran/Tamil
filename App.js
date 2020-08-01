import * as React from 'react';
import { Dimensions, ActivityIndicator   } from 'react-native';

import Loading from './components/Loading';

import Carousel from './components/Carousel';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          loading: false,
          carouselItems: []
      }
    }

    componentDidMount() {
      this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
      const url = `https://tamiln.s3.amazonaws.com/api/sample.json`;
      this.setState({ loading: true });
      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            carouselItems: res.articles,
            loading: false
          });
        })
        .catch(error => {
          this.setState({ loading: false });
        });
    };

    loading() {
      return <Loading />;
    }

    render() {
        return (
          this.state.loading ? this.loading() : 
            <Carousel carouselItems={this.state.carouselItems} />
        );
    }
}

