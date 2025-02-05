# Travel Packing List App

A React-based travel packing list application that helps users keep track of their travel items with persistent storage functionality.

## Features

- Add items to your packing list with quantity and description
- Mark items as packed/unpacked
- Delete individual items
- Clear entire packing list
- Local storage persistence
- Real-time statistics of packed items

## Technologies Used

- React.js
- Local Storage API
- CSS for styling

## Component Structure

- **App.js**: Main component that manages state and core functionalities
- **Form**: Handles new item input
- **Logo**: Displays application logo
- **PackingList**: Renders the list of items
- **Stats**: Shows packing statistics

## Core Functionalities

### State Management
- Uses React's useState hook for managing items
- Implements localStorage for data persistence

### Key Operations
1. **Add Items**: `handleAddItem()`
   - Adds new items with unique IDs
   - Automatically updates state and storage

2. **Delete Items**: `handleDeleteItem()`
   - Removes individual items by ID
   - Updates state accordingly

3. **Toggle Items**: `handleToggleItem()`
   - Marks items as packed/unpacked
   - Updates item status in real-time

4. **Clear List**: `handleClearList()`
   - Removes all items after confirmation
   - Prevents accidental deletions

## Installation

1. Clone the repository
```bash
git clone https://github.com/TanvirJahan001/Travel-List.git
```

2. Install dependencies
```bash
npm install
```

3. Run the application
```bash
npm start
```

## Usage

1. Add items using the form at the top
2. Input quantity and item description
3. Click checkbox to mark items as packed
4. Use delete button to remove individual items
5. Clear list button removes all items

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

- Built with React.js
- Uses modern React hooks and practices
- Implements responsive design principles
