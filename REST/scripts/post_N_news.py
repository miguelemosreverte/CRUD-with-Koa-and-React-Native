import requests
import simplejson as json
import argparse
import lorem



if __name__ == "__main__":

    description = "Given N, post N news to the API made out of lorem ipsums."
    parser = argparse.ArgumentParser(description=description)
    parser.add_argument('N',help=description)


    # argument parsing
    args = parser.parse_args()
    N =  args.N
    for n in range(0, int(N)):
        s = lorem.sentence()  # 'Eius dolorem dolorem labore neque.'
        p = lorem.paragraph()
        t = lorem.text()


        url = "http://localhost:5000/news"
        data = {
        "title": s,
        "description": p,
        "content": t,
        "link": "http://www.lavoz.com.ar/"
        }
        headers = {'Content-type': 'application/json', 'Authorization': "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXNlciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTUzNDc2NTQ4OX0.PHH3IPY6hrPHo6rb8rRwadHkov90iwnmnicLSg3IpDg"}
        r = requests.post(url, data=json.dumps(data), headers=headers)
