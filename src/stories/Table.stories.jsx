import React from 'react';
import { RenderTableData, TableUser, TableArtikel } from './Table';
import TableList from './Table';

export default {
    title: 'Example/Table',
    component: TableList, RenderTableData, TableUser, TableArtikel
}

const data = [
    {name: 'Abdulazeez Abdulazeez', course: 'Water Resources and Environmental Engineering'},
    {name: 'Albert Einstein', course: 'Physics'},
    {name: 'John Doe', course: 'Estate Managment'},
    {name: 'Sigismund Freud', course: 'Neurology'},
    {name: 'Leonhard Euler', course: 'Mathematics'},
    {name: 'Ben Carson', course: 'Neurosurgery'}
]

export function ShowStudentsData() {
    return (
        <RenderTableData data={data} />
    )
}

export function EmptyDataList(){
    return (
        <TableList />
    )
}

export function EmptyDataArtikel(){
    return (
        <TableArtikel />
    )
}

export function EmptyDataUser(){
    return (
        <TableUser />
    )
}