import glob
import pysftp

localFilePath = "./build/"
remoteFilePath = "/home/apoenapy/app.apoena.org/"
myHostname = ""
myUsername = ""
myPassword = ""

projectFolder = '/gameapi-admin-react/'
projectDestFolder = '/'

dirs = [
  "build/*.*",
  "build/static/js/*.js",
  "build/static/css/*.css"
]

def replace_in_file(_file):
      
      
  # Read in the file
  with open(_file, 'r' , encoding='utf-8',errors='ignore') as file :
    filedata = file.read()

  # Replace the target string
  filedata = filedata.replace(projectFolder, projectDestFolder)

  # Write the file out again
  with open(_file, 'w', encoding='utf-8',errors='ignore') as file:
    file.write(filedata)

  print(_file)

for diretorio in dirs:
  for arquivo in glob.glob(diretorio):
    replace_in_file(arquivo)
      

with pysftp.Connection(host=myHostname, username=myUsername, password=myPassword) as sftp:
    sftp.put_r(localFilePath, remoteFilePath)
