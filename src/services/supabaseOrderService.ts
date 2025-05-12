import { supabase } from './supabaseClient';

interface OrderData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  delivery_method: 'shipping' | 'pickup';
  terminal?: string;
  terminal_type?: string;
  status: string;
}

export const createOrder = async (orderData: OrderData) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .insert([orderData])
      .select()
      .single();

    if (error) {
      console.error('Error creating order:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in createOrder:', error);
    throw error;
  }
};