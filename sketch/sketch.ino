int button1 = 6;
int button2 = 8;
int data = 0;

void setup() {
  Serial.begin(9600);
  pinMode(button1, INPUT);
  pinMode(button2, INPUT);
}

void loop() {
  delay(500);
  if(digitalRead(button1) == HIGH) 
  {
    data = 1;
    Serial.println(data);
  }
  if(digitalRead(button2) == HIGH) 
  {
    data = 2;
    Serial.println(data);
  }
}