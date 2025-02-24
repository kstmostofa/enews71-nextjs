type Category = {
    id: number;
    name: string;
    name_bn: string;
    slug: string;
}

type Division = {
    id: number;
    name: string;
    name_bn: string;
}

type District = {
    id: number;
    name: string;
    name_bn: string;
    division_id: number;
}

type Upazila = {
    id: number;
    name: string;
    name_bn: string;
    district_id: number;
}

type Designation = {
    id: number;
    name: string;
    name_bn: string;
}

type Reporter = {
    id: number;
    name: string;
    name_bn: string;
    photo: string;
    designation: Designation;
}

type News = {
    id: number;
    title: string;
    slug: string;
    content: string;
    categories: Category[];
    division: Division;
    district: District;
    upazila: Upazila;
    tags: string[];
    featured_image: string;
    reporter: Reporter;
    is_published: boolean;
    created_at: string;
    status: string;
    view_count: number;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    published_at: string;
    
}