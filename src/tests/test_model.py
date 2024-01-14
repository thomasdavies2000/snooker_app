import json

def test_model_ping(test_app):
    client = test_app.test_client()
    resp = client.get('/ping')
    data = json.loads(resp.data.decode())

    assert resp.status_code == 200
    
    
    # assert len(data['files_in_output_end']) == 1

    

    
    