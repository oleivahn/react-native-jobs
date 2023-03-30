import { useCallback } from "react";
import { Stack } from "expo-router";
// This is used to use custom fonts
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Makes the splash screen stay on the screen until the app is ready
SplashScreen.preventAutoHideAsync();

const Layout = () => {
  // Loads custom fonts
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  // Same as useLayout - Runs before anything gets rendered
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
