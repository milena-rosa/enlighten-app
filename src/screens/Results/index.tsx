import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";

type RootStackParamList = {
  Home: undefined;
  Results: { numberOfPanels: number; payback: number };
};

type Props = NativeStackScreenProps<RootStackParamList, "Results">;

const Results: React.FC<Props> = ({ route }) => {
  const { numberOfPanels, payback } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "flex-start", justifyContent: "center", margin: 24 }}>
      <Text h4 h4Style={{ fontSize: 24, textAlign: "justify", paddingBottom: 24 }}>
        Número de painéis necessários: <Text style={{ fontWeight: "400" }}>{numberOfPanels}</Text>
      </Text>
      <Text h4 h4Style={{ fontSize: 24, textAlign: "justify", paddingBottom: 24 }}>
        Tempo de retorno do investimento: <Text style={{ fontWeight: "400" }}>{payback} meses</Text>
      </Text>
    </View>
  );
};

export default Results;
