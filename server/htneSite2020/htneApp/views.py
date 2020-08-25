from django.shortcuts import render
from django.contrib.auth import login
from .forms import SignUpForm


def home(request):
    return render(request, 'home.html', {'user': request.user})


def sign_up(request):
    context_signup = {}
    form = SignUpForm(request.POST or None)
    if request.method == "POST":
        if form.is_valid():
            user = form.save()
            login(request, user)
            return render(request, 'home.html')
    context_signup['form'] = form
    return render(request, 'login.html', context_signup)