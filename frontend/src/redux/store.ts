import { configureStore } from '@reduxjs/toolkit';

// Import reducers once they are created
// import authReducer from './slices/authSlice';
// import eventReducer from './slices/eventSlice';

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    // events: eventReducer,
    // Add more reducers as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;