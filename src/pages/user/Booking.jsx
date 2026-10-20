import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const tripDetails = {
  route: 'Lagos → Abuja',
  date: 'Mon, 18 Nov 2025',
  time: '08:30 AM',
  passenger: 'Premium Coach',
  seat: 'Seat A12',
  duration: '6h 15m',
  price: 245000,
  serviceFee: 15000,
  insurance: 5000,
};

const addOns = [
  { id: 1, title: 'Airport Pickup', price: 12000 },
  { id: 2, title: 'Travel Insurance', price: 5000 },
  { id: 3, title: 'Extra Luggage', price: 9000 },
];

const initialPassengers = [
  { id: 1, name: 'Ada Okafor', phone: '+234 803 123 4567', email: 'ada@email.com' },
  { id: 2, name: 'Chinedu Okafor', phone: '+234 705 555 2233', email: 'chinedu@email.com' },
];

export default function Booking() {
  const [passengers, setPassengers] = useState(initialPassengers);
  const [selectedAddOns, setSelectedAddOns] = useState([1, 2]);
  const [specialNote, setSpecialNote] = useState('');

  const subtotal = useMemo(() => {
    const addOnTotal = addOns
      .filter((item) => selectedAddOns.includes(item.id))
      .reduce((sum, item) => sum + item.price, 0);

    return tripDetails.price + addOnTotal + tripDetails.serviceFee + tripDetails.insurance;
  }, [selectedAddOns]);

  const toggleAddOn = (id) => {
    setSelectedAddOns((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  const updatePassenger = (id, field, value) => {
    setPassengers((current) =>
      current.map((passenger) =>
        passenger.id === id ? { ...passenger, [field]: value } : passenger,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F7FB" />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.8}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Booking</Text>
        <TouchableOpacity style={styles.helpButton} activeOpacity={0.8}>
          <Text style={styles.helpText}>Help</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.tripCard}>
          <View style={styles.tripHeader}>
            <View>
              <Text style={styles.tripLabel}>Trip summary</Text>
              <Text style={styles.tripRoute}>{tripDetails.route}</Text>
            </View>
            <View style={styles.tripBadge}>
              <Text style={styles.tripBadgeText}>Booked</Text>
            </View>
          </View>

          <View style={styles.tripMetaRow}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Date</Text>
              <Text style={styles.metaValue}>{tripDetails.date}</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Departure</Text>
              <Text style={styles.metaValue}>{tripDetails.time}</Text>
            </View>
          </View>

          <View style={styles.tripMetaRow}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Coach</Text>
              <Text style={styles.metaValue}>{tripDetails.passenger}</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Seat</Text>
              <Text style={styles.metaValue}>{tripDetails.seat}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.tripFooter}>
            <Text style={styles.footerLabel}>Duration</Text>
            <Text style={styles.footerValue}>{tripDetails.duration}</Text>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Passenger details</Text>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.linkText}>Edit</Text>
            </TouchableOpacity>
          </View>

          {passengers.map((passenger, index) => (
            <View key={passenger.id} style={styles.passengerCard}>
              <Text style={styles.passengerNumber}>Passenger {index + 1}</Text>

              <TextInput
                style={styles.input}
                value={passenger.name}
                placeholder="Full name"
                onChangeText={(text) => updatePassenger(passenger.id, 'name', text)}
              />

              <TextInput
                style={styles.input}
                value={passenger.phone}
                placeholder="Phone number"
                keyboardType="phone-pad"
                onChangeText={(text) => updatePassenger(passenger.id, 'phone', text)}
              />

              <TextInput
                style={styles.input}
                value={passenger.email}
                placeholder="Email address"
                keyboardType="email-address"
                onChangeText={(text) => updatePassenger(passenger.id, 'email', text)}
              />
            </View>
          ))}
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Add-ons</Text>

          {addOns.map((item) => {
            const selected = selectedAddOns.includes(item.id);

            return (
              <TouchableOpacity
                key={item.id}
                style={[styles.addOnRow, selected && styles.addOnRowSelected]}
                activeOpacity={0.9}
                onPress={() => toggleAddOn(item.id)}
              >
                <View style={styles.checkWrap}>
                  <View style={[styles.checkBox, selected && styles.checkBoxSelected]}>
                    {selected ? <Text style={styles.checkMark}>✓</Text> : null}
                  </View>
                  <Text style={styles.addOnTitle}>{item.title}</Text>
                </View>

                <Text style={styles.addOnPrice}>₦{item.price.toLocaleString()}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Special request</Text>
          <TextInput
            style={[styles.input, styles.noteInput]}
            value={specialNote}
            placeholder="Any special accommodation or note?"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            onChangeText={setSpecialNote}
          />
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Price summary</Text>

          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Base fare</Text>
            <Text style={styles.priceValue}>₦{tripDetails.price.toLocaleString()}</Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Service fee</Text>
            <Text style={styles.priceValue}>₦{tripDetails.serviceFee.toLocaleString()}</Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Insurance</Text>
            <Text style={styles.priceValue}>₦{tripDetails.insurance.toLocaleString()}</Text>
          </View>

          {selectedAddOns.length > 0 && (
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Add-ons</Text>
              <Text style={styles.priceValue}>
                ₦
a
                {addOns
                  .filter((item) => selectedAddOns.includes(item.id))
                  .reduce((sum, item) => sum + item.price, 0)
                  .toLocaleString()}
              </Text>
            </View>
          )}

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>₦{subtotal.toLocaleString()}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footerBar}>
        <View>
          <Text style={styles.footerCaption}>Total payable</Text>
          <Text style={styles.footerAmount}>₦{subtotal.toLocaleString()}</Text>
        </View>

        <TouchableOpacity style={styles.payButton} activeOpacity={0.9}>
          <Text style={styles.payButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 24,
    paddingBottom: 12,
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  backText: {
    fontSize: 22,
    color: '#111827',
    fontWeight: '700',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
  },
  helpButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#E6F0FF',
  },
  helpText: {
    color: '#2346B9',
    fontWeight: '700',
    fontSize: 13,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  tripCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#1f2937',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  tripHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  tripLabel: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  tripRoute: {
    marginTop: 4,
    color: '#111827',
    fontSize: 24,
    fontWeight: '800',
  },
  tripBadge: {
    backgroundColor: '#E8F8EE',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  tripBadgeText: {
    color: '#198754',
    fontSize: 11,
    fontWeight: '700',
  },
  tripMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  metaItem: {
    flex: 1,
  },
  metaLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#94A3B8',
    marginBottom: 4,
  },
  metaValue: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 14,
  },
  tripFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLabel: {
    color: '#64748B',
    fontSize: 14,
    fontWeight: '600',
  },
  footerValue: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: '800',
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#111827',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  sectionTitle: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '800',
  },
  linkText: {
    color: '#2346B9',
    fontSize: 13,
    fontWeight: '700',
  },
  passengerCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
  },
  passengerNumber: {
    color: '#0F172A',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 11,
    fontSize: 14,
    color: '#0F172A',
    marginBottom: 10,
  },
  noteInput: {
    minHeight: 92,
    paddingTop: 12,
  },
  addOnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#F8FAFC',
    marginTop: 10,
  },
  addOnRowSelected: {
    borderColor: '#2E6EFF',
    backgroundColor: '#EEF4FF',
  },
  checkWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  checkBox: {
    width: 18,
    height: 18,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#C7D2FE',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  checkBoxSelected: {
    backgroundColor: '#2346B9',
    borderColor: '#2346B9',
  },
  checkMark: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },
  addOnTitle: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: '600',
  },
  addOnPrice: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '700',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  priceLabel: {
    color: '#475569',
    fontSize: 14,
    fontWeight: '500',
  },
  priceValue: {
    color: '#0F172A',
    fontSize: 14,
    fontWeight: '700',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
    paddingTop: 14,
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
  },
  totalLabel: {
    fontSize: 17,
    fontWeight: '800',
    color: '#111827',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0F172A',
  },
  footerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 22,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },
  footerCaption: {
    color: '#64748B',
    fontSize: 12,
    fontWeight: '600',
  },
  footerAmount: {
    marginTop: 4,
    color: '#111827',
    fontSize: 24,
    fontWeight: '900',
  },
  payButton: {
    backgroundColor: '#2346B9',
    borderRadius: 14,
    paddingHorizontal: 26,
    paddingVertical: 16,
    minWidth: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  payButtonText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 16,
  },
});
