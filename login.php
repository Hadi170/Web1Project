<?php
session_start();
$conn = new mysqli("localhost", "root", "", "web1", 3307);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST['email'];
  $password = $_POST['password'];
  $result = $conn->query("SELECT * FROM users WHERE email='$email'");
  if ($row = $result->fetch_assoc()) {
    if (password_verify($password, $row['password'])) {
      $_SESSION['user_id'] = $row['id'];
      header("Location: home.html");
      exit();
    } else echo "Wrong password";
  } else echo "User not found";
}
?>
<form method="POST">
  <input type="email" name="email" placeholder="Email" required><br>
  <input type="password" name="password" placeholder="Password" required><br>
  <button type="submit">Login</button>
</form>
