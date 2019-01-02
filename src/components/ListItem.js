import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableWithoutFeedback, 
    NativeModules, 
    LayoutAnimation } from 'react-native'; 
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
    //When any component appears on the screen
    //This is a lifecycle method. Define them once and they will automatically be called
    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                    {library.item.description}</Text>
                </CardSection>
            );
        }
    }
    
    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library.item;
        return (
            <TouchableWithoutFeedback 
            onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
};

//this component does not really care about the meaning of selectedLibraryId is
//it just care about whether or not it should show the expanded view
//mapStateToProps help to bring our application level state down to component level state
//Basically pluck properties off the state object and inject them into the component
//Whenever the app state changes, this const will rerun, pass in a new set of components which causes our component to re-render

//Whenever we call an action creator that dispatches an action, reducers rereun, state is recalculated and state flows into mapStateToProps. 
//New props show up inside the component and the entire application will rerender 

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;
    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
//Take these action creattors and make sure the actions go to the right place whenever called
//Pass these actions down into the components as props
