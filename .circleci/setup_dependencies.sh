#!/usr/bin/env bash
set -x

wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
sudo sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
sudo apt-get update && sudo apt-get install google-chrome-stable
#Install aws cli
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo chmod +x /usr/local/*
sudo ./aws/install -i /usr/local/aws-cli -b /usr/local/bin

configure_aws_cli() {

    aws --version

  if [ $1 == "dev" ] || [ $1 == "qa" ]; then
    aws configure set default.aws_access_key_id   $AWS_ACCESS_KEY_ID_DEV_n_QA
    aws configure set default.aws_secret_access_key  $AWS_SECRET_ACCESS_KEY_DEV_n_QA
  elif [ $1 == "stage" ] || [ $1 == "prod" ]; then
    aws configure set default.aws_access_key_id   $AWS_ACCESS_KEY_ID_STAGE_n_PROD
    aws configure set default.aws_secret_access_key  $AWS_SECRET_ACCESS_KEY_STAGE_n_PROD
  fi

}

configure_aws_cli "$@"
