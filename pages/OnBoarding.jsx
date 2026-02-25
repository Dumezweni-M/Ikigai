import { View, Text } from "react-native";
import PageWrapper from "../components/PageWrapper";

import Navi from "../components/Navi";

const OnBoarding = () => {
    return (
        <PageWrapper>
            <View >
                <Navi/>
                <Text className="text-2xl">ONBOARDING PAGE</Text>
                
                <Text>Ask for their Ikigai Aspirations. The user fills in 1–2 long-term goals for each quadrant.</Text>
                <Text>Love: "I want to paint again."</Text>
                <Text>Good At: "I want to be a senior developer."</Text>
                <Text>World Needs: "I want to reduce my carbon footprint."</Text>
                <Text>Paid For: "I want to launch my side hustle."</Text>
            </View>
        </PageWrapper>
    )
}

export default OnBoarding;