import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

import { setPrimaryColor } from '../actions/themes';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
  $orange: '$primaryOrange'
});

class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func
  };

  handleThemePress = color => {
    this.props.dispatch(setPrimaryColor(color));
    this.props.navigation.goBack();
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <StatusBar translucent={false} barStyle="default" />
          <ListItem
            text="Blue"
            onPress={() => this.handleThemePress(styles.$blue)}
            selected
            checkmark={false}
            iconBackground={styles.$blue}
          />
          <Separator />
          <ListItem
            text="Green"
            onPress={() => this.handleThemePress(styles.$green)}
            selected
            checkmark={false}
            iconBackground={styles.$green}
          />
          <Separator />
          <ListItem
            text="Purple"
            onPress={() => this.handleThemePress(styles.$purple)}
            selected
            checkmark={false}
            iconBackground={styles.$purple}
          />
          <Separator />
          <ListItem
            text="Orange"
            onPress={() => this.handleThemePress(styles.$orange)}
            selected
            checkmark={false}
            iconBackground={styles.$orange}
          />
          <Separator />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default connect()(Themes);
