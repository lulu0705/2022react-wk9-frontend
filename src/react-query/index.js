import { useQuery } from '@tanstack/react-query'
import { getCardById, getCards, getUser, getUserById } from "../api";

export const useCards = (url) => {
   const { data, isLoading } = useQuery([url], getCards)
   return { data, isLoading };
};

export const useCardById = (cardId) => {
   const { data, isLoading } = useQuery([cardId], getCardById)
   return { data, isLoading };
}

export const useUser = (urlUser) => {
   const { data } = useQuery([urlUser], getUser)
   return { data };
};

export const useUserById = (userId) => {
   const { data } = useQuery([userId], getUserById)
   return { data };
};