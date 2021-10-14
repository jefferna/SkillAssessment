import React from 'react';

import { TouchableOpacity, Text, View} from 'react-native';

const PostCard = ({item, id, onPress}) => {
    return (
        <TouchableOpacity key={id} onPress={onPress}>
            <View style={{marginBottom: 10, alignItems: 'center',
                borderStyle: 'solid', borderWidth: 1, marginHorizontal: 10}}>
                <Text>{item.id}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default PostCard