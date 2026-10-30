export interface PersonalInfo {
    photo: File;
    fullName: string;
    title: string;
    email: string;
    phone: string;
    address: string;
    summary: string;
}

export interface Education {
    id: string | number;
    school: string;
    degree: string;
    startYear: string;
    endYear: string;
}

export interface Experience {
    id: string | number;
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
}

export interface CvData {
    personal: PersonalInfo;
    education: Education[];
    experience: Experience[];
    skills: string;
    languages: string;
    hobbies: string;
}