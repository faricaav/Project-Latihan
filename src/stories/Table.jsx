import React from 'react';
import './table.css'

export default function TableList() {
    return (
        <table>
            <thead>
                <tr>
                    <th>NIS</th>
                    <th>Nama</th>
                    <th>Alamat</th>
                    <th>Jurusan</th>
                    <th>Sertifikat</th>
                    <th>Aksi</th>
                </tr>
            </thead>            
            <tbody>
            <tr>
                <td colSpan="6">No data available</td>
            </tr>
            </tbody>
        </table>
        
    )
}

export function TableUser() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Aksi</th>
                </tr>
            </thead>            
            <tbody>
            <tr>
                <td colSpan="5">No data available</td>
            </tr>
            </tbody>
        </table>
        
    )
}

export function RenderTableData({data}){
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                </tr>
            </thead>            
            <tbody>
            {data.map(student => (
                <tr>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                </tr>
            ))}
            </tbody>
        </table>
        
    )
}