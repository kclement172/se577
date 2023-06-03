export interface StudentApiInterface {
    studentId: string,
    studentName: string,
    courseId: string
}

export interface RepoInfoApiInterface {
    Name: string,
    Language: string,
    CreatedDate: string
}

export interface WeatherAppInterface {
    Name: string
}

export interface URLApiInterface {
    current_user_url: string,
    authorizations_url: string,
    gists_url: string
}

export interface UserApiInterface {
    login: string,
    id: string,
    gists_url: string
}

export interface ApiErrorInterface {
    isError: boolean,
    errorCode: number,
    errorMessage: string
}
