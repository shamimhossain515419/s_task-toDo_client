import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const TaskApi = () => {

     const [axiosSecure] = useAxiosSecure();
     const { data, refetch, isLoading } = useQuery({
          queryKey: ['task'],
          queryFn: () => axiosSecure.get('http://localhost:5000/task')
     })
     const toDoData = data?.data

     return [toDoData,refetch]
};

export default TaskApi;