export interface R {
    res_id: number;
}

export interface Location {
    address: string;
    locality: string;
    city: string;
    city_id: number;
    latitude: string;
    longitude: string;
    zipcode: string;
    country_id: number;
    locality_verbose: string;
}

export interface UserRating {
    aggregate_rating: string;
    rating_text: string;
    rating_color: string;
    votes: string;
}

export interface Photo2 {
    url: string;
    thumb_url: string;
    order: number;
    md5sum: string;
    id: number;
    photo_id: number;
    uuid: any;
    type: string;
}

export interface Photo {
    photo: Photo2;
}

export interface Type {
    name: string;
    color: string;
}

export interface ShareData {
    should_show: number;
}

export interface Event {
    event_id: number;
    friendly_start_date: string;
    friendly_end_date: string;
    friendly_timing_str: string;
    start_date: string;
    end_date: string;
    end_time: string;
    start_time: string;
    is_active: number;
    date_added: string;
    photos: Photo[];
    restaurants: any[];
    is_valid: number;
    share_url: string;
    show_share_url: number;
    title: string;
    description: string;
    display_time: string;
    display_date: string;
    is_end_time_set: number;
    disclaimer: string;
    event_category: number;
    event_category_name: string;
    book_link: string;
    types: Type[];
    share_data: ShareData;
}

export interface ZomatoEvent {
    event: Event;
}

export interface Restaurant2 {
    R: R;
    apikey: string;
    id: string;
    name: string;
    url: string;
    location: Location;
    switch_to_order_menu: number;
    cuisines: string;
    average_cost_for_two: number;
    price_range: number;
    currency: string;
    offers: any[];
    opentable_support: number;
    is_zomato_book_res: number;
    mezzo_provider: string;
    is_book_form_web_view: number;
    book_form_web_view_url: string;
    book_again_url: string;
    thumb: string;
    user_rating: UserRating;
    photos_url: string;
    menu_url: string;
    featured_image: string;
    medio_provider: number;
    has_online_delivery: number;
    is_delivering_now: number;
    include_bogo_offers: boolean;
    deeplink: string;
    is_table_reservation_supported: number;
    has_table_booking: number;
    book_url: string;
    events_url: string;
    establishment_types: any[];
    zomato_events: ZomatoEvent[];
    order_url: string;
    order_deeplink: string;
    favourite?: boolean;
    icon?: string;
}

export interface Restaurant {
    restaurant: Restaurant2;
}

export interface IRestaurantCollection {
    results_found: number;
    results_start: number;
    results_shown: number;
    restaurants: Restaurant[];
}


