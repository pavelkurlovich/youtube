import  React, { Component } from 'react';
import './../App.css';

const API = 'AIzaSyAhAgnxIQ6GuO2NltT0_Wg8Uueirl2goSU'
const playlistID = 'UCOD2veMoMj5jy6K0pGt55Bw'
const result = 9;

const finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${playlistID}&part=snippet,id&order=date&maxResults=${result}`

class Youtube extends Component {

    constructor(props) {
        super(props);

        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this);
    }
clicked () {
    fetch(finalURL)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
        this.setState({resultyt});
    })
    .catch((error) => {
      console.error(error);
    });
}

    render () {
        console.log(finalURL);
        console.log(this.state.resultyt);
        return (
            <div>
                <h1>плэйлист</h1>
                <button onClick={this.clicked}>нажми сюда</button>
                    <div className='playList'>
                    {
                        this.state.resultyt.map((movie, i) => {
                            console.log(movie);
                            const frame = <div className="youtube">
                                <iframe key={i} width="450" height="300" src={movie} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>                                    
                                </iframe>
                            </div>
                            return frame;
                        })
                    }
                    {this.frame}  
                    </div>                                  
            </div>
        );
    }
}

export default Youtube;










