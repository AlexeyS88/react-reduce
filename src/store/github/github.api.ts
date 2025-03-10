import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IUser, IRepo, ServerResponse} from "../../models/models.ts";

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com',
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        searchUsers: build.query<IUser[], string>({
            query: (search: string) => ({
                url: `search/users`,
                params: {
                    q: search,
                    per_page: 10,
                }
            }),
            transformResponse: (response: ServerResponse<IUser>)=> response.items
        }),
        getUserRepos: build.query<IRepo[], string>({
            query: (username: string) => ({
                url: `users/${username}/repos`
            })
        }),
        createUser: build.mutation<IUser, string>({
            query: () => ''
        })
    })
})

export const {useSearchUsersQuery, useLazyGetUserReposQuery} = githubApi