import google.generativeai as genai

# Configure the Google Generative AI API
genai.configure(api_key="AIzaSyD4L8M4UWOadPU13eJ6nhaY7hDhvnBFWaw")

def summarize_text_file(file_path):
    # Read the content of the text file
    with open(file_path, 'r') as file:
        file_content = file.read()
    
    # Choose a Gemini model
    model = genai.GenerativeModel(model_name="gemini-1.5-flash")
    
    # Generate a summary
    response = model.generate_content([file_content, "Can you summarize this document as a bulleted list?"])
    
    return response.text

# Example usage:
file_path = "report.txt"
summary = summarize_text_file(file_path)
print(summary)
