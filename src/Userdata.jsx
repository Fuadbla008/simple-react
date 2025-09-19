export default function User({ user }) {
  return (
    <div style={{ border: '2px solid green', margin: '20px', padding: '20px', borderRadius: '10px' }}>
      <h2>Name: {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <p>Address: {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
    </div>
  );
}