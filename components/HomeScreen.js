import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation, route }) {
  // Menerima nama yang diekstrak dari email (default "Mahasiswa")
  const userName = route.params?.userName || "Mahasiswa";

  const handleLogout = () => {
    navigation.replace("Login");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.pageTitle}>Home Page</Text>

        {/* Card Profil */}
        <View style={styles.profileBanner}>
          <LinearGradient
            colors={["#2960F7", "#b5c8fc"]}
            style={styles.gradientBorder}
          >
            <Image
              source={require("../assets/pajril-firefly.png")}
              style={styles.profileImage}
            />
          </LinearGradient>

          {/* Menampilkan Nama Dinamis dari Email */}
          <Text style={styles.profileName}>{userName}</Text>
          <Text style={styles.profileSubtext}>Informatics Student</Text>
        </View>

        {/* Menu Grid */}
        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.menuCard}>
            <View style={[styles.iconBox, { backgroundColor: "#EEF2FF" }]}>
              <Ionicons
                name="document-text-outline"
                size={24}
                color="#2960F7"
              />
            </View>
            <Text style={styles.menuTitle}>Tugas</Text>
            <Text style={styles.menuValue}>3</Text>
            <Text style={styles.menuSubtext}>Tugas belum selesai</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCard}>
            <View style={[styles.iconBox, { backgroundColor: "#EEF2FF" }]}>
              <Ionicons name="calendar-outline" size={24} color="#2960F7" />
            </View>
            <Text style={styles.menuTitle}>Jadwal</Text>
            <Text style={styles.menuValue}>2</Text>
            <Text style={styles.menuSubtext}>Mata Kuliah hari ini</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCard}>
            <View style={[styles.iconBox, { backgroundColor: "#EEF2FF" }]}>
              <Ionicons name="checkbox-outline" size={24} color="#2960F7" />
            </View>
            <Text style={styles.menuTitle}>Absensi</Text>
            <Text style={styles.menuValue}>97%</Text>
            <Text style={styles.menuSubtext}>Semua mata kuliah</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCard}>
            <View style={[styles.iconBox, { backgroundColor: "#EEF2FF" }]}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#2960F7"
              />
            </View>
            <Text style={styles.menuTitle}>Pengumuman</Text>
            <Text style={styles.menuValue}>2</Text>
            <Text style={styles.menuSubtext}>Pengumuman baru</Text>
          </TouchableOpacity>
        </View>

        {/* Tombol Logout */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="#EF4444" />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#F8F9FA" },
  container: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
    alignItems: "center",
  },
  pageTitle: {
    fontSize: 24,
    letterSpacing: -1,
    fontWeight: "500",
    color: "#1E293B",
    marginBottom: 20,
    marginTop: 10,
  },
  profileBanner: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    paddingVertical: 24,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  gradientBorder: { padding: 3, borderRadius: 54, marginBottom: 12 },
  profileImage: { width: 90, height: 90, borderRadius: 50 },
  profileName: {
    fontSize: 26,
    letterSpacing: -1,
    fontWeight: "500",
    color: "#1E293B",
  },
  profileSubtext: { fontSize: 14, color: "#94A3B8", marginTop: 2 },
  gridContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 28,
  },
  menuCard: {
    width: "47%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#334155",
    letterSpacing: -0.7,
  },
  menuValue: {
    fontSize: 26,
    fontWeight: "500",
    color: "#2960F7",
    marginVertical: 4,
  },
  menuSubtext: { fontSize: 12, color: "#aaaaaa" },
  logoutButton: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#FEE2E2",
    borderRadius: 16,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  logoutButtonText: {
    color: "#EF4444",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: -0.5,
  },
});
