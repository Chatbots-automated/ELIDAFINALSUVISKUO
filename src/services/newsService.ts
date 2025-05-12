import { supabase } from './supabaseClient';

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
  published: boolean;
}

export const fetchNews = async (): Promise<NewsItem[]> => {
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching news:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in fetchNews:', error);
    return [];
  }
};