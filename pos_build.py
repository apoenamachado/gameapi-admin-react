# Deploy react in sftp server folder
#
# Crate deploy.config.ini
# [PROD]
# remoteFilePath = /path/on/remote/server/
# Hostname = yourHostname
# Username = yourUserName
# Password = yourPassword
#

import glob
import pysftp
import configparser

# Load Config
config = configparser.ConfigParser()
config.sections()
config.read('deploy.config.ini')
conf = config['PROD'] 

localFilePath = "./build/"
remoteFilePath = conf['remoteFilePath']
Hostname = conf['Hostname']
Username = conf['Username']
Password = conf['Password']

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
      
# Send files
with pysftp.Connection(host=Hostname, username=Username, password=Password) as sftp:
    print("Connected to "+ Hostname)

    # Switch to a remote directory
    sftp.cwd(remoteFilePath)

    # Obtain structure of the remote directory '/var/www/vhosts'
    directory_structure = sftp.listdir_attr()

    # Clear dir
    for attr in directory_structure:
        if sftp.isfile(attr.filename):  
          print('Delete '+ attr.filename)
          sftp.remove(attr.filename)

    print("Publishing files in "+ remoteFilePath + '...')
    sftp.put_r(localFilePath, remoteFilePath)
    sftp.close()

    print('Deploy Done!')