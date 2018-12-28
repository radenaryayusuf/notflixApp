import React, {Component} from 'react'
import { View,Text, StyleSheet } from 'react-native'
import Video from 'react-native-video'
import VideoPlayer from 'react-native-video-controls'
import { connect } from 'react-redux'
import { GET_MOVIE } from '../actions'
import WebView from 'react-native-android-fullscreen-webview-video';


 class trailerAqua extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      idmovie : this.props.navigation.getParam('id', 'ID TIDAK ADA'),
    };
  }
    componentDidMount() {
        this.props.dispatch(GET_MOVIE(this.state.idmovie))
      }
  render () {
    return (
      <View style={styles.container}>
        {/* <VideoPlayer
        source={{uri:'https://nonton.bioskopkeren.pro/redirector.php?id=WGRnZ1R2eHRoNklHUnUya1F6MXE5WWVWOVl3N0lGQmYyalg4UXZUOEpSTGhEdFkwL2JlcllVMThNd2I0YS9FNUd2cU1WUURSL2VMS3FrdExKNGROMG9KeGJXc29LajhYQXdEdTZybXRKb3I0UmNTZ0FKbFZnSFZ2MHhXdVZibzZMcDJQZk1QNVFiNTlYUGFJdlJOSzNPT1BFdHE3VU13aTBiV080eUxxRURiWlVJRFlZTWFXMjR6MnVwM2lmeWo3Vm0raFdieGFIaFBuMHZ1Q2dZcWMyZXNDTkEyVFJ6aFZhYTJhVDVKWVJxWVNvRkZJQWN3SERkeE5hSEFBcHNvaHhPTzdYSjl3YnNoYTJjUktLNHY1c2c9PQ=='}}
          // style={{ width: 800, height: 800 }}
          // muted={true}
          // repeat={true}
          // resizeMode={"cover"}
          // volume={1.0}
          // rate={1.0}
          // ignoreSilentSwitch={"obey"}
          title={this.props.title}
          onBack={() => null}

        /> */}
        <WebView
        source={{uri: 'https://www.imdb.com/videoplayer/vi3588536857?playlistId=tt1477834&ref_=tt_ov_vi' }}
          // style={{ width: 800, height: 800 }}
          // muted={true}
          // repeat={true}
          // resizeMode={"cover"}
          // volume={1.0}
          // rate={1.0}
          // ignoreSilentSwitch={"obey"}
          title={this.props.title}
          onBack={() => null}

        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      getmovie: state.moviesReducer
   
    }
  }
  
  export default connect(mapStateToProps)(trailerAqua);
// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex:1
  }
});