import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { Text, TextInput, Button } from "react-native-paper";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_2}>
        <Image
          source={require("../../assets/logo.png")}
          minHeight={150}
          minWidth={150}
          style={styles.logo}
        />
        <View style={styles.container_3}>
          <View style={styles.container_4}>
            <View style={{ alignItems: "center" }}>
              <Text variant="headlineSmall">Iniciar Sesión</Text>
              <Text variant="labelSmall">
                Por favor inicie sesión para continuar
              </Text>
            </View>
            <View
              style={{
                gap: 10,
              }}
            >
              <TextInput label="Email" />
              <TextInput
                label="Password"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
              />
              <TouchableHighlight
                onPress={() => console.log("Forgot your password")}
              >
                <Text
                  variant="labelSmall"
                  style={{ textAlign: "right", color: "#178237" }}
                >
                  ¿Olvido su contraseña?
                </Text>
              </TouchableHighlight>
            </View>
            <View
              style={{
                paddingTop: 50,
                justifyContent: "space-between",
                minHeight: 150,
              }}
            >
              <Button
                mode="contained"
                onPress={() => {
                  console.log("Forgot Password");
                }}
                style={{ backgroundColor: "#E4C500" }}
              >
                Iniciar Sesión
              </Button>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <Text variant="labelSmall" style={{ textAlign: "center" }}>
                  ¿No tienes una cuenta?
                </Text>
                <TouchableHighlight
                  onPress={() => console.log("Go to Register")}
                >
                  <Text
                    variant="labelSmall"
                    style={{ textAlign: "right", color: "#178237" }}
                  >
                    Regitrate
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  container_2: {
    minHeight: 680,
    maxHeight: 680,
    maxWidth: 400,
    backgroundColor: "#E14C06",
    justifyContent: "flex-end",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 64,
    borderBottomLeftRadius: 30,
    position: "relative",
  },
  container_3: {
    minHeight: "85%",
    minWidth: "100%",
    backgroundColor: "#E4C500",
    padding: 10,
    borderTopLeftRadius: 122,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 64,
  },
  container_4: {
    flexGrow: 1,
    minWidth: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 122,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 64,
    paddingTop: 30,
    paddingLeft: 5,
    paddingRight: 5,
    gap: 40,
  },
  logo: {
    position: "absolute",
    top: -10,
    left: 0,
  },
});
export default Login;
