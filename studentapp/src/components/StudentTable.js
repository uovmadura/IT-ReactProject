import '..assets/css/compo.css'

export default function StudentTable(props) {
    return(
        <div className="outerDev">
            <div className="leftDev">
                <table>
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Course</td>
                            <td>Country</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}