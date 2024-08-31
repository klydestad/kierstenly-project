from docxtpl import DocxTemplate
import json

def generate_resume(template_path, data_path, output_path):
    # Load the template
    doc = DocxTemplate(template_path)
    
    # Load data from JSON
    with open(data_path) as f:
        data = json.load(f)
    
    # Render the document
    doc.render(data)
    
    # Save the generated document
    doc.save(output_path)

if __name__ == "__main__":
    generate_resume('resume_template.docx', 'resume_data.json', 'Kiersten_Lyde-Stad_Resume.docx')