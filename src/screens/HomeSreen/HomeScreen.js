import React, { useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import PostCard from './PostCard';

import constants from '../../api/utils'

import { getPostsRequest } from '../../ducks/posts/actionCreators';

const HomeScreen = () => {

    const dispatch = useDispatch()
    const {fetchedData} = useSelector(state => state.postsReducer)


    const handleCardPress = (id) => {
        console.log("Card Pressed", id)
    }

    // const a = async () => {
    //     const {data} = await constants.axiosInstance.get(constants.GET_POSTS)

    //     console.log(data)
    // }

    useEffect(() => {

        // a()
        dispatch(getPostsRequest())
    }, [])

    if (!fetchedData) {
        return (
            <Text>
                Empty
            </Text>
        )
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {
                fetchedData.map((item, index) => {
                    return (
                        <PostCard item={item} id={index} onPress={handleCardPress}/>
                    )
                })
            }
        </ScrollView>
    )
}

export default HomeScreen;