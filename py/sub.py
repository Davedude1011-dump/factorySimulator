import pyautogui

while True:
    try:
        print("Move your mouse to the top-left corner of the region and press Enter.")
        input()
        top_left = pyautogui.position()
        print(f"Top-left coordinates: {top_left}")

        print("Move your mouse to the bottom-right corner of the region and press Enter.")
        input()
        bottom_right = pyautogui.position()
        print(f"Bottom-right coordinates: {bottom_right}")

        # Calculate and display the width and height of the region
        width = bottom_right[0] - top_left[0]
        height = bottom_right[1] - top_left[1]
        print(f"Width: {width}, Height: {height}")

        # Ask if you want to continue or exit
        user_input = input("Do you want to continue (y/n)? ")
        if user_input.lower() != 'y':
            break

    except KeyboardInterrupt:
        print("Operation aborted.")
        break