import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'

export default function DataTable({ columns, rows }) {
    return (
        <div style={{ height: 200, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
}
