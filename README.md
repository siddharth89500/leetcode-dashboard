# LeetCode Dashboard

## Overview
LeetCode Dashboard is a simple web application that allows users to track their LeetCode progress by entering their username. It fetches problem-solving statistics from an external API and visually represents the data using progress indicators.

## Features
- Fetches LeetCode user statistics using an API.
- Displays total problems solved, rank, and progress for Easy, Medium, and Hard problems.
- Provides a clean and simple user interface.
- Validates user input to ensure correct username format.
- Shows progress using circular indicators.

## Technologies Used
- **HTML**: Structure of the webpage
- **CSS**: Styling and layout
- **JavaScript**: Fetching data, updating UI dynamically
- **LeetCode Stats API**: `https://leetcode-stats-api.herokuapp.com/{username}` (for fetching user data)

## Installation & Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/leet-dashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd leet-dashboard
   ```
3. Open `index.html` in your browser.

## How It Works
1. Enter your **LeetCode username** in the input field.
2. Click on the **Search** button.
3. The app fetches and displays the following details:
   - Rank
   - Total Questions
   - Solved & Unsolved Questions
   - Progress Percentage for Easy, Medium, and Hard problems
4. Progress is represented using circular indicators.



## Future Enhancements
- Improve UI/UX with better styling.
- Add dark mode support.
- Implement caching to reduce API calls.
- Show recent solved problems.

## Contributing
Feel free to contribute to the project by submitting pull requests! If you find any issues, open an issue in the repository.


### ⭐ Don't forget to star the repository if you found it useful!

