function Userdata({user}) {
  const [users] = user;
  return (
    console.log(users),
    <div style={{ border: '2px solid green', margin: '20px', padding: '20px', borderRadius: '10px' }}>
      <h2>Name: {users.name}</h2>
      <p>Email: {users.email}</p>
      <p>Phone: {users.phone}</p>
      <p>Website: {users.website}</p>
      <p>Company: {users.company?.name}</p>
      <p>Address: {users.address?.street}, {users.address?.city}</p>
    </div>
  );
}

export default Userdata;