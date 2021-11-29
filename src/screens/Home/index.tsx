import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import { api } from "../../services/api";

type RootStackParamList = {
  Home: undefined;
  Results: { numberOfPanels: number; payback: number };
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

interface IDictionary {
  [key: string]: string;
}

const states = {
  AC: "ACRE",
  AL: "ALAGOAS",
  AP: "AMAPÁ",
  AM: "AMAZONAS",
  BA: "BAHIA",
  CE: "CEARÁ",
  ES: "ESPÍRITO SANTO",
  GO: "GOIÁS",
  MA: "MARANHÃO",
  MT: "MATO GROSSO",
  MS: "MATO GROSSO DO SUL",
  MG: "MINAS GERAIS",
  PA: "PARÁ",
  PB: "PARAÍBA",
  PR: "PARANÁ",
  PE: "PERNAMBUCO",
  PI: "PIAUÍ",
  RJ: "RIO DE JANEIRO",
  RN: "RIO GRANDE DO NORTE",
  RS: "RIO GRANDE DO SUL",
  RO: "RONDÔNIA",
  RR: "RORAIMA",
  SC: "SANTA CATARINA",
  SP: "SÃO PAULO",
  SE: "SERGIPE",
  TO: "TOCANTINS",
} as IDictionary;

export default function Home({ navigation }: Props) {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [averageConsumption, setAverageConsumption] = useState(0);

  const handleSubmitValues = async () => {
    console.log(city, state, averageConsumption);
    if (city === "" || state === "" || averageConsumption === 0) {
      return;
    }

    const response = await api.post("usersInfo", {
      city,
      state: state.length === 2 ? states[state] : state.toUpperCase(),
      averageConsumption,
    });

    if (!response.data) {
      return;
    }

    const { numberOfPanels, payback } = response.data;

    navigation.push("Results", { numberOfPanels, payback });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", margin: 20 }}>
      <Text h4 h4Style={{ fontSize: 24, textAlign: "justify", paddingBottom: 24 }}>
        Digite os dados abaixo para calcular o número de placas e o tempo estimado de retorno do
        investimento.
      </Text>
      <Input
        placeholder="Digite sua cidade"
        label="Cidade"
        labelStyle={{ textTransform: "uppercase" }}
        leftIcon={{ type: "feather", name: "home" }}
        onChangeText={(value) => setCity(value)}
        containerStyle={{ paddingBottom: 24 }}
      />
      <Input
        placeholder="Digite seu Estado"
        label="Estado"
        labelStyle={{ textTransform: "uppercase" }}
        leftIcon={{ type: "feather", name: "map" }}
        onChangeText={(value) => setState(value)}
        containerStyle={{ paddingBottom: 24 }}
      />
      <Input
        placeholder="Digite o consumo médio mensal"
        label="Consumo médio mensal (kWh)"
        labelStyle={{ textTransform: "uppercase" }}
        leftIcon={{ type: "feather", name: "sun" }}
        onChangeText={(value) => setAverageConsumption(Number(value))}
        keyboardType="numeric"
      />

      <Button
        title="Calcular"
        type="outline"
        buttonStyle={{ marginTop: 32 }}
        onPress={handleSubmitValues}
      />
    </View>
  );
}
