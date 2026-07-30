from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/categories/bac')
def bac():
    return render_template('categories/bac.html')

@app.route('/categories/notre_dame')
def notre_dame():
    return render_template('categories/notre_dame.html')

@app.route('/categories/lycee_scientifique')
def lycee_scientifique():
    return render_template('categories/lycee_scientifique.html')

@app.route('/categories/matieres_facultatives')
def matieres_facultatives():
    return render_template('categories/matieres_facultatives.html')

@app.route('/epreuve/<int:id>')
def epreuve_view(id):
    # En production, l'ID permettrait de récupérer le bon fichier PDF depuis une base de données
    return render_template('epreuve_view.html', id=id)

@app.route('/upload')
def upload():
    return render_template('upload.html')

if __name__ == '__main__':
    app.run(debug=True)