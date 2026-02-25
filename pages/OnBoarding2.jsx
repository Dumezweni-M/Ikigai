import { View, Text } from "react-native";
import PageWrapper from "../components/PageWrapper";

import Navi from "../components/Navi";

const OnBoarding2 = () => {
    return (
        <PageWrapper>
            <View >
                <Navi/>
                <Text className="text-2xl">ONBOARDING PAGE 2</Text>
                
                <Text className="text-xl">The user creates habits and tags them to a quadrant.</Text>
                <Text>Habit: "Gym" → Tag: Good At (Physical Skill).</Text>
                <Text>Habit: "Community Gardening" → Tag: World Needs.</Text>
                <Text>Habit: "1 hour Coding" → Tag: Paid For."</Text>
                
            </View>
        </PageWrapper>
    )
}

export default OnBoarding2;