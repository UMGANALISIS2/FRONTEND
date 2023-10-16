Private Sub Form_Load()
Shape2.Visible = True
Shape1.Visible = False
Shape3.Visible = False
End Sub

Private Sub Timer1_Timer()
If Shape1.Visible Then

Shape2.Visible = True
Shape1.Visible = False
Shape3.Visible = False

ElseIf Shape2.Visible Then

Shape3.Visible = True
Shape2.Visible = False
Shape1.Visible = False

Else

Shape1.Visible = True
Shape2.Visible = False
Shape3.Visible = False

End If

End Sub