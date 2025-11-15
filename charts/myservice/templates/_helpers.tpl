{{- define "myservice.name" -}}
myservice
{{- end }}

{{- define "myservice.fullname" -}}
{{ printf "%s-%s" .Release.Name "myservice" }}
{{- end }}
