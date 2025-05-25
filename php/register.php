<?php
$conn = new mysqli("localhost", "root", "", "web1", 3307);
$message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST['email'];
  $password = $_POST['password'];
  $confirm = $_POST['confirm'];

  if ($password !== $confirm) {
    $message = "Passwords do not match";
  } else {
    $hashed = password_hash($password, PASSWORD_DEFAULT);
    $conn->query("INSERT INTO users (email, password) VALUES ('$email', '$hashed')");
    $message = "Account created!";
  }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Register</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      background-color: #f2f2f2;
    }
    .container {
      max-width: 400px;
      margin: auto;
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    h2 {
      text-align: center;
    }
    form {
      display: flex;
      flex-direction: column;
    }
    input {
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      padding: 10px;
      background-color: black;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #333;
    }
    p {
      text-align: center;
      margin-top: 10px;
    }
    .message {
      text-align: center;
      color: red;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>

  <div class="container">
    <h2>Register</h2>

    <?php if (!empty($message)): ?>
      <p class="message"><?php echo $message; ?></p>
    <?php endif; ?>

    <form method="POST">
      <input type="email" name="email" required placeholder="Email">
      <input type="password" name="password" required placeholder="Password">
      <input type="password" name="confirm" required placeholder="Confirm Password">
      <button type="submit">Register</button>
    </form>

    <p>Already have an account? <a href="login.php">Login here</a></p>
    <p><a href="../html/home.html">← Go Back</a></p>
  </div>

</body>
</html>
