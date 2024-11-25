export default function Profile(props) {
    return(
        <>
            <table>
                <tr>
                    <td rowSpan={7}>
                        <img className='profile' src={require('../assets/profilepic/1.jpg')} alt="profile picture" />
                    </td>
                    <td>ID {props.stu.studentId}</td>
                </tr>
            </table>
        </>
    )
}