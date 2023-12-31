import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { AuthContact } from '../Component/AuthProvider/AuthProvider';

const TaskApi = () => {
     const { user } = useContext(AuthContact)
     const [axiosSecure] = useAxiosSecure();
     const { data, refetch, isLoading } = useQuery({
          queryKey: ['task', user, ],
          queryFn: () => axiosSecure.get(`/task?email=${user?.email}`)
     })
     console.log(data);
     const toDoData = data?.data

     return [toDoData, refetch, isLoading]
};

export default TaskApi;