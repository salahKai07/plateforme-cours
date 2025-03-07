<h1 align="center">Online Course Platform - Microservices Project</h1>

<p align="center">
  This project is a simple online course platform built using <strong>Node.js</strong> and <strong>MongoDB</strong>. It consists of four microservices:
</p>

<ul>
  <li><strong>Auth Service</strong>: Handles user registration, login, and profile management.</li>
  <li><strong>Course Service</strong>: Manages courses (add, update, delete, search).</li>
  <li><strong>Student Service</strong>: Manages students and their course enrollments.</li>
  <li><strong>Teacher Service</strong>: Manages teachers and their assigned courses.</li>
</ul>

<p>Each service is independent and communicates via REST APIs.</p>

<h2>Prerequisites</h2>

<p>Before running the project, ensure you have the following installed:</p>

<ol>
  <li><strong>Node.js</strong>: Download and install from <a href="https://nodejs.org/">nodejs.org</a>.</li>
  <li><strong>MongoDB</strong>: Install MongoDB locally or use a cloud instance like MongoDB Atlas.</li>
  <li><strong>Postman</strong>: Download and install from <a href="https://www.postman.com/downloads/">postman.com</a>.</li>
</ol>

<h2>Setup Instructions</h2>

<h3>1. Clone the Repository</h3>

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
<h3> 2. Install Dependencies</h3>
<p>Navigate to each service folder and install the required dependencies:</p>

```bash
cd auth-service
npm install
```

```bash
cd ../course-service
npm install
```

```bash
cd ../student-service
npm install
```

```bash
cd ../teacher-service
npm install
```

<h3>3. Run the Services</h3>
<p>Start each service in a separate terminal window:</p>

```bash
cd auth-service
node server.js
```

```bash
cd ../course-service
node server.js
```

```bash
cd ../student-service
node server.js
```

```bash
cd ../teacher-service
node server.js
```

<p>Each service will run on the following ports:</p>
<ul> <li><strong>Auth Service</strong>: <code>http://localhost:3000</code></li>
  <li><strong>Course Service</strong>: <code>http://localhost:3001</code></li>
  <li><strong>Student Service</strong>: <code>http://localhost:3002</code></li>
  <li><strong>Teacher Service</strong>: <code>http://localhost:3003</code></li>
</ul>
<h2>Testing with Postman</h2>
<h3>1. Auth Service</h3>
<h4>Register a New User</h4>
<ul>
  <li><strong>Method</strong>: <code>POST</code></li>
  <li><strong>URL</strong>: <code>http://localhost:3000/auth/register</code></li> 
  <li><strong>Body</strong> (raw JSON):
    
 <pre>
  <code>
    {
    "name": "John Doe", 
    "email": "john@example.com",
    "password": "123456"
    }
        </code>
</pre>

  </li> </ul>
  <h4>Login and Get JWT Token</h4>
  <ul> 
    <li><strong>Method</strong>: <code>POST</code></li>
    <li><strong>URL</strong>: <code>http://localhost:3000/auth/login</code></li>
    <li><strong>Body</strong> (raw JSON):
      
 <pre>
  <code>
    {
    "email": "john@example.com",
      "password": "123456"
    } 
        </code>
</pre>
<ul>
  <li><strong>Save the Token</strong>: Copy the <code>token</code> from the response. You’ll need it for authenticated routes.</li>
</ul>

<h4>Get User Profile</h4>
<ul>
  <li><strong>Method</strong>: <code>GET</code></li>
  <li><strong>URL</strong>: <code>http://localhost:3000/auth/profile</code></li>
  <li><strong>Headers</strong>:
    <ul>
      <li><code>Authorization</code>: <code>&lt;JWT_TOKEN&gt;</code></li>
    </ul>
  </li>
</ul>

<h3>2. Course Service</h3>

<h4>Add a New Course</h4>
<ul>
  <li><strong>Method</strong>: <code>POST</code></li>
  <li><strong>URL</strong>: <code>http://localhost:3001/course/add</code></li>
  <li><strong>Headers</strong>:
    <ul>
      <li><code>Authorization</code>: <code>&lt;JWT_TOKEN&gt;</code></li>
    </ul>
  </li>
  <li><strong>Body</strong> (raw JSON):</li>
</ul>
  <pre>
  <code>
    {
      "titre": "Introduction to Node.js",
      "professeur_id": "prof1",
      "description": "Learn the basics of Node.js",
      "prix": 49.99
    }
  </code>
</pre>

      
<h4>Get All Courses</h4>
<ul>
  <li><strong>Method</strong>: <code>GET</code></li>
  <li><strong>URL</strong>: <code>http://localhost:3001/course/all</code></li>
  <li><strong>Headers</strong>:
    <ul>
      <li><code>Authorization</code>: <code>&lt;JWT_TOKEN&gt;</code></li>
    </ul>
  </li>
</ul>

<h4>Search for Courses</h4>
<ul>
  <li><strong>Method</strong>: <code>GET</code></li>
  <li><strong>URL</strong>: <code>http://localhost:3001/course/search?term=Node</code></li>
  <li><strong>Headers</strong>:
    <ul>
      <li><code>Authorization</code>: <code>&lt;JWT_TOKEN&gt;</code></li>
    </ul>
  </li>
</ul>

<h3>3. Student Service</h3>

<h4>Add a New Student</h4>
<ul>
  <li><strong>Method</strong>: <code>POST</code></li>
  <li><strong>URL</strong>: <code>http://localhost:3002/student/add</code></li>
  <li><strong>Headers</strong>:
    <ul>
      <li><code>Authorization</code>: <code>&lt;JWT_TOKEN&gt;</code></li>
    </ul>
  </li>
  <li><strong>Body</strong> (raw JSON):</li>
</ul>

<pre>
  <code>
  {
    "nom": "Alice",
    "email": "alice@example.com"
  }
  </code>
</pre>

<h4>Enroll a Student in a Course</h4>
<ul>
  <li><strong>Method</strong>: <code>POST</code></li>
  <li><strong>URL</strong>: <code>http://localhost:3002/student/enroll/&lt;STUDENT_ID&gt;/&lt;COURSE_ID&gt;</code></li>
  <li><strong>Headers</strong>:
    <ul>
      <li><code>Authorization</code>: <code>&lt;JWT_TOKEN&gt;</code></li>
    </ul>
  </li>
</ul>

<h4>Get Enrolled Courses for a Student</h4>
<ul>
  <li><strong>Method</strong>: <code>GET</code></li>
  <li><strong>URL</strong>: <code>http://localhost:3002/student/enrolledCourses/&lt;STUDENT_ID&gt;</code></li>
  <li><strong>Headers</strong>:
    <ul>
      <li><code>Authorization</code>: <code>&lt;JWT_TOKEN&gt;</code></li>
    </ul>
  </li>
</ul>

<h3>4. Teacher Service</h3>

<h4>Add a New Teacher</h4>
<ul>
  <li><strong>Method</strong>: <code>POST</code></li>
  <li><strong>URL</strong>: <code>http://localhost:3003/teacher/add</code></li>
  <li><strong>Headers</strong>:
    <ul>
      <li><code>Authorization</code>: <code>&lt;JWT_TOKEN&gt;</code></li>
    </ul>
  </li>
  <li><strong>Body</strong> (raw JSON):</li>
</ul>

<pre>
  <code>
  {
    "name": "Dr. Smith",
    "bio": "Expert in Computer Science"
  }
  </code>
</pre>

    
    
<h4>Assign a Course to a Teacher</h4>
<ul>
  <li><strong>Method</strong>: <code>POST</code></li>
  <li><strong>URL</strong>: <code>http://localhost:3003/teacher/assign/&lt;TEACHER_ID&gt;/&lt;COURSE_ID&gt;</code></li>
  <li><strong>Headers</strong>:
    <ul>
      <li><code>Authorization</code>: <code>&lt;JWT_TOKEN&gt;</code></li>
    </ul>
  </li>
</ul>

<h4>Get Enrolled Students for a Course</h4>
<ul>
  <li><strong>Method</strong>: <code>GET</code></li>
  <li><strong>URL</strong>: <code>http://localhost:3003/teacher/enrolledStudents/&lt;COURSE_ID&gt;</code></li>
  <li><strong>Headers</strong>:
    <ul>
      <li><code>Authorization</code>: <code>&lt;JWT_TOKEN&gt;</code></li>
    </ul>
  </li>
</ul>

<h2>Contributing</h2>
<p>Feel free to contribute to this project by opening issues or submitting pull requests.</p>

<h2>Credits</h2>
<p>This project was created by <strong>Salaheddine Ouafik (OFPPT)</strong>.</p>

